import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-firefox-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFirefoxLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.54 2.32 9.15 2.88 7.89C3.35 6.96 4.11 6.02 4.73 5.7C4.08 6.98 3.76 8.24 3.69 9.08C4.15 7.58 5.01 6.33 6.21 5.44C8.28 3.92 11.06 3.85 12.17 4.82C10.11 5.53 7.87 8.37 8.36 11.7C8.44 12.24 8.61 12.78 8.85 13.28C8.47 12.27 8.44 10.84 9.05 9.92C9.75 8.89 10.73 8.67 11.26 8.78C11.05 8.74 10.59 9.62 10.53 9.77C10.35 10.17 10.27 10.59 10.27 11.02C10.29 11.92 10.66 12.78 11.3 13.4C13.23 15.28 16.33 14.54 17.72 12.4C18.67 10.93 18.78 8.43 17.56 6.45C17.26 5.97 16.89 5.52 16.48 5.13C14.63 3.36 12 2.56 9.5 2.93C8.39 3.1 7.45 3.42 6.67 3.88C7.76 2.8 9.91 2 12 2ZM6.88 7.7C4.62 8.49 3.37 10.88 4.3 14.17C5.22 17.45 8.19 19.89 11.75 20L12 20C16.25 20 19.73 16.68 19.99 12.5L20 12.28C19.87 12.63 19.71 12.96 19.53 13.26L19.39 13.49C17.29 16.73 12.71 17.57 9.91 14.84C9.53 14.47 9.2 14.04 8.95 13.58L8.84 13.38C7.11 12.99 6.26 12.05 6.3 10.56C6.33 9.57 6.53 8.6 6.88 7.7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFirefoxLine;
