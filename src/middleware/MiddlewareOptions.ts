/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
    Resource,
    AccessRule
} from "../config/AppSettings";

export type InitializationOptions = {
    // TODO: add options
};

export type SignInOptions = {
    successRedirect: string;
    failureRedirect?: string;
    extraScopesToConsent?: string[];
    customState?: Object;
}

export type SignOutOptions = {
    successRedirect: string;
    failureRedirect?: string;
}

export type HandleRedirectOptions = {
    // TODO: add options
};

export type TokenRequestOptions = {
    resource: Resource;
    claims?: string;
    skipCache?: boolean;
    customState?: Object;
};

export type GuardOptions = {
    accessRule?: AccessRule
};