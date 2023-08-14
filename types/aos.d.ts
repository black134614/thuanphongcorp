declare module 'aos' {
    interface AosOptions {
      // Define AOS configuration options here
      // For example:
      offset?: number;
      duration?: number;
      easing?: string;
      // ... and so on
    }
  
    const aos: {
      init(options?: AosOptions): void;
      refresh(): void;
      // Define other AOS methods if needed
    };
  
    export default aos;
  }
  