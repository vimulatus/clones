import { DOCUMENT } from '@angular/common';
import { inject, Injectable, OnDestroy, RendererFactory2 } from '@angular/core'
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

type Theme = 'light' | 'dark';

@Injectable({
    providedIn: 'root'
})
export class ThemeService implements OnDestroy {

    // we use Angular's renderer to add/remove the dark class from  the html element
    private _renderer = inject(RendererFactory2).createRenderer(null, null);
    // we use Angular's Document injection token to avoid directly accessing the document object
    private _document = inject(DOCUMENT);

    // give every subscriber the current value of our theme
    // even if they subscribe after the first value was emitted
    private _theme$ = new BehaviorSubject<Theme>('dark');

    // expose the current theme so our app can access it
    public theme$ = this._theme$.asObservable();

    // this emits when the service is destroyed used to clean up subscriptions
    private _destroyed$ = new Subject<void>();

    // sync and listen to theme changes on service creation
    constructor() {
        // check the current value in the localStorage to see what theme was set
        this.syncThemeFromLocalStorage();

        // immediately subscribe to our theme$ variable and add/remove the dark class
        // from the html element
        this.toggleClassOnThemeChanges();
    }

    // sync with the theme set in the localStorage by our index.html script
    private syncThemeFromLocalStorage(): void {
        this._theme$.next(
            localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
        );
    }

    // subscribe to theme changes until the service is destroyed
    private toggleClassOnThemeChanges(): void {
        // until our service is destroyed we subscribe to all changes in the theme$ variable
        this.theme$.pipe(takeUntil(this._destroyed$)).subscribe(theme => {
            if (theme === 'dark')
                this._renderer.addClass(this._document.documentElement, 'dark');
            else {
                // else if added already, remove it
                if (this._document.documentElement.className.includes('dark'))
                    this._renderer.removeClass(this._document.documentElement, 'dark')
            }
        })
    }

    // expose a public function that allows us to change the theme from
    // anywhere in our application
    public toggleDarkMode(): void {
        const newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        this._theme$.next(newTheme);
    }

    // clean up our subscriptions when the service gets destroyed
    public ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }
}