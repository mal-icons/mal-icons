import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-pinterest-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPinterestLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.49 19.19C8.52 18.85 8.56 18.52 8.63 18.19C8.7 17.9 8.89 17.06 9.17 15.85L9.18 15.82C9.3 15.29 9.43 14.72 9.56 14.15C9.64 13.81 9.7 13.55 9.74 13.46C9.55 13.01 9.45 12.53 9.46 12.04C9.46 10.7 10.22 9.66 11.2 9.66C11.56 9.66 11.9 9.81 12.14 10.09C12.38 10.37 12.49 10.73 12.44 11.09C12.44 11.54 12.35 11.88 11.99 13.12C11.92 13.36 11.87 13.53 11.82 13.69C11.77 13.88 11.73 14.05 11.69 14.21C11.59 14.6 11.68 15.01 11.93 15.32C12.17 15.63 12.54 15.8 12.93 15.78C14.42 15.78 15.53 13.79 15.53 11.23C15.53 9.26 14.24 7.95 12.1 7.95C11.02 7.91 9.97 8.33 9.2 9.1C8.43 9.88 7.99 10.94 8.01 12.06C7.98 12.66 8.17 13.25 8.52 13.71C8.7 13.84 8.77 14.09 8.69 14.29C8.65 14.46 8.55 14.85 8.52 14.98C8.49 15.1 8.41 15.21 8.3 15.27C8.19 15.33 8.05 15.33 7.95 15.27C6.79 14.8 6.15 13.5 6.15 11.83C6.15 8.85 8.64 6.25 12.34 6.25C15.48 6.25 17.82 8.58 17.82 11.39C17.82 14.92 15.89 17.49 13.13 17.49C12.34 17.52 11.58 17.16 11.09 16.54L11.04 16.71C10.95 17.1 10.9 17.29 10.84 17.56L10.83 17.57C10.69 18.17 10.59 18.59 10.55 18.75C10.44 19.1 10.31 19.45 10.15 19.78C10.74 19.93 11.36 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 15.16 5.83 17.89 8.49 19.19ZM12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPinterestLine;
