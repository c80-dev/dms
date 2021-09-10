<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //auth repository binding
        $this->app->bind(
            \App\Repositories\Contracts\AuthRepositoryInterface::class,
            \App\Repositories\AuthRepository::class
        );

        //email verification repository binding
        $this->app->bind(
            \App\Repositories\Contracts\EmailVerificationRepositoryInterface::class,
            \App\Repositories\EmailVerificationRepository::class
        );

        //password rest repository binding
        $this->app->bind(
            \App\Repositories\Contracts\ResetPasswordRepositoryInterface::class,
            \App\Repositories\ResetPasswordRepository::class
        );

        //user repository binding
        $this->app->bind(
            \App\Repositories\Contracts\UserRepositoryInterface::class,
            \App\Repositories\UserRepository::class
        );

        //group repository binding
        $this->app->bind(
            \App\Repositories\Contracts\GroupRepositoryInterface::class,
            \App\Repositories\GroupRepository::class
        );

        //tag repository binding
        $this->app->bind(
            \App\Repositories\Contracts\TagRepositoryInterface::class,
            \App\Repositories\TagRepository::class
        );

        //files repository binding
        $this->app->bind(
            \App\Repositories\Contracts\FileRepositoryInterface::class,
            \App\Repositories\FileRepository::class
        );


    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
