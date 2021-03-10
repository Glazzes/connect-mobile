export interface WebsitePreview {
  url: string;
  title: any;
  siteName: any;
  description: any;
  mediaType: any;
  images: string[];
  contentType: string | undefined;
  videos: any[]
  favicons: string[];
}

export interface AnyLinkPreview {
  url: string;
  mediaType: string;
  contentType: string;
  favicons: string[];
}