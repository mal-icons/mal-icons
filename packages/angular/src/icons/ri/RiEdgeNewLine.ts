import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-edge-new-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiEdgeNewLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.95 18.2C6.3 16.77 6 15.2 6 14C6 12.5 6.59 10.91 7.6 9.68C8.24 8.9 9.08 8.24 10.07 7.86C9.59 7.79 9.06 7.75 8.5 7.75C5.99 7.75 4 9.61 4 12C4 14.5 5.15 16.74 6.95 18.2ZM12 20C12.93 20 13.82 19.84 14.65 19.55C11.29 18.99 9 16.94 8.03 14.59C8.12 15.61 8.46 16.88 9.06 17.95C9.78 19.22 10.75 20 12 20ZM16.5 12C16.5 12.47 16.44 12.91 16.31 13.32C16.52 13.34 16.75 13.35 17 13.35C18.78 13.35 20 12.12 20 10.5C20 7.37 16.7 4 12 4C9.98 4 8.14 4.75 6.73 5.98C7.3 5.83 7.89 5.75 8.5 5.75C10.91 5.75 12.9 6.35 14.31 7.47C15.74 8.59 16.5 10.2 16.5 12ZM12 9.5C10.62 9.5 9.5 10.62 9.5 12C9.5 14.5 11.8 17.7 16.5 17.7C16.94 17.7 17.34 17.67 17.7 17.62C18 17.57 18.28 17.52 18.53 17.45C18.72 17.4 18.9 17.35 19.06 17.29C19.19 17.24 19.32 17.2 19.43 17.15C19.56 17.1 19.68 17.05 19.78 17C19.99 16.91 20.13 16.85 20.22 16.85C20.4 16.85 20.5 16.95 20.5 17.15C20.5 17.31 20.43 17.43 20.22 17.71C20.17 17.77 20.13 17.83 20.07 17.9L20 18C19.83 18.23 19.65 18.45 19.46 18.66C19.2 18.95 18.93 19.22 18.64 19.48C16.87 21.05 14.55 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6 22 10.5C22 13.3 19.8 15.35 17 15.35C15 15.35 13.6 14.7 13.6 14C13.6 13.86 13.71 13.75 13.85 13.6C14.12 13.32 14.5 12.91 14.5 12C14.5 10.62 13.38 9.5 12 9.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiEdgeNewLine;
