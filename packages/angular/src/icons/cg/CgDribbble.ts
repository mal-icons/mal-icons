import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-dribbble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgDribbble {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 11.96V12.04C1.01 14.73 1.98 17.19 3.59 19.09C4.06 19.64 4.58 20.15 5.14 20.6C5.71 21.05 6.32 21.45 6.97 21.79C7.9 22.27 8.91 22.62 9.98 22.81C10.59 22.93 11.22 22.99 11.87 23C11.91 23 11.96 23 12 23C15.69 23 18.95 21.18 20.95 18.4C21.37 17.81 21.73 17.19 22.03 16.52C22.65 15.14 23 13.61 23 12C23 8.74 21.58 5.81 19.33 3.8C18.81 3.33 18.24 2.91 17.64 2.55C15.99 1.57 14.06 1 12 1C11.89 1 11.78 1 11.67 1C10 1.05 8.42 1.48 7.02 2.19C6.07 2.67 5.2 3.29 4.43 4.02C3.72 4.7 3.09 5.47 2.58 6.31C2.22 6.91 1.92 7.54 1.67 8.21C1.24 9.38 1.01 10.64 1 11.96ZM20.48 15.02C20.82 14.08 21 13.06 21 12C21 9.54 20.02 7.32 18.42 5.69C17.6 7.05 16.51 8.18 15.27 9.05C15.74 10.26 15.99 11.56 16 12.88C16.77 13.05 17.53 13.3 18.27 13.65C19.07 14.03 19.81 14.49 20.48 15.02ZM15.84 14.9C16.38 15.03 16.9 15.22 17.42 15.46C18.22 15.83 18.94 16.31 19.57 16.87C18.07 19.2 15.52 20.8 12.58 20.98C13.55 20.06 14.37 18.94 14.97 17.65C15.39 16.75 15.68 15.83 15.84 14.9ZM14 12.62C13.96 11.74 13.79 10.87 13.5 10.04C10.69 11.3 7.37 11.38 4.35 9.97C4.01 9.81 3.68 9.64 3.37 9.45C3.13 10.26 3 11.11 3 12C3 13.95 3.62 15.75 4.67 17.22C6.83 14.19 10.37 12.5 14 12.62ZM6.05 18.75C7.77 16.06 10.77 14.54 13.86 14.62C13.72 15.36 13.49 16.09 13.16 16.81C12.38 18.48 11.15 19.81 9.67 20.7C8.31 20.33 7.07 19.66 6.05 18.75ZM12 3C13.78 3 15.45 3.52 16.85 4.42C16.21 5.55 15.36 6.5 14.37 7.23C13.35 5.57 11.88 4.16 10.03 3.22C10.66 3.07 11.32 3 12 3ZM8.81 4.85C10.45 5.61 11.75 6.81 12.64 8.24C10.35 9.25 7.65 9.3 5.2 8.16C4.83 7.99 4.49 7.8 4.15 7.59C4.91 6.24 6.01 5.11 7.33 4.31C7.83 4.44 8.32 4.62 8.81 4.85Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgDribbble;
