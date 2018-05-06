﻿import { UrlContract } from '../urls/urlContract';

/**
 * Service for managing urls.
 */
export interface IUrlService {
    /**
     * Searches for urls that contain specified pattern in their title, description or keywords.
     */
    search(pattern: string): Promise<Array<UrlContract>>;

    /**
     * Returns a url by specified key;
     */
    getUrlByKey(key: string): Promise<UrlContract>;

    /**
     * Deletes a specified url from storage.
     */
    deleteUrl(url: UrlContract): Promise<void>;

    /**
     * Creates new url in storage and returns a contract of it.
     */
    createUrl(title: string, description?: string): Promise<UrlContract>;

    /**
     * Updates a url.
     */
    updateUrl(url: UrlContract): Promise<void>;
}