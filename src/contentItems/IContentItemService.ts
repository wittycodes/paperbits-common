﻿import { Contract } from "../";
import { ContentItemContract } from "../contentItems/contentItemContract";

/**
 * Service for managing contentItems.
 */
export interface IContentItemService {
    /**
     * Searches for contentItems that contain specified pattern in their title, description or keywords.
     */
    search(pattern: string): Promise<ContentItemContract[]>;

    /**
     * Returns contentItem by specified key.
     */
    getContentItemByKey(key: string): Promise<ContentItemContract>;

    getContentItemByUrl(url: string): Promise<ContentItemContract>;

    /**
     * Deletes specified contentItem from storage.
     */
    deleteContentItem(contentItem: ContentItemContract): Promise<void>;

    /**
     * Creates a new contentItem in storage and returns its contract.
     */
    createContentItem(url: string, title: string, description: string, keywords): Promise<ContentItemContract>;

    /**
     * Updates a contentItem.
     */
    updateContentItem(contentItem: ContentItemContract): Promise<void>;

    /**
     * Returns contentItem content by specified key.
     * @param contentItemKey 
     */
    getContentItemContent(contentItemKey: string): Promise<Contract>;

    /**
     * Updates contentItem content.
     * @param contentItemKey {string} Key of the contentItem.
     * @param document {Contract} Content of the contentItem.
     */
    updateContentItemContent(contentItemKey: string, document: Contract): Promise<void>;
}