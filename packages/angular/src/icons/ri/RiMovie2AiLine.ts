import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-movie-2-ai-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMovie2AiLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.71 8.13L20.47 8.69C20.29 9.11 19.71 9.11 19.53 8.69L19.29 8.13C18.85 7.12 18.06 6.32 17.07 5.88L16.31 5.54C15.9 5.36 15.9 4.76 16.31 4.58L17.03 4.26C18.04 3.81 18.84 2.97 19.28 1.93L19.53 1.32C19.71 0.89 20.29 0.89 20.47 1.32L20.72 1.93C21.16 2.97 21.96 3.81 22.97 4.26L23.69 4.58C24.1 4.76 24.1 5.36 23.69 5.54L22.93 5.88C21.94 6.32 21.15 7.12 20.71 8.13ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22H20V20H18C18.76 19.43 19.43 18.76 20 18C21.26 16.33 22 14.25 22 12C22 11.6 21.98 11.2 21.93 10.81L19.94 11.05C19.98 11.36 20 11.68 20 12C20 14.39 18.95 16.53 17.29 18C15.88 19.24 14.03 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C12.69 4 13.36 4.09 14 4.25L14.5 2.31C13.7 2.11 12.86 2 12 2ZM10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8ZM6 12C6 13.1 6.9 14 8 14C9.1 14 10 13.1 10 12C10 10.9 9.1 10 8 10C6.9 10 6 10.9 6 12ZM14 12C14 13.1 14.9 14 16 14C17.1 14 18 13.1 18 12C18 10.9 17.1 10 16 10C14.9 10 14 10.9 14 12ZM10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14C10.9 14 10 14.9 10 16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMovie2AiLine;
