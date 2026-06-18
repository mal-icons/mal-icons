import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-verified-badge-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiVerifiedBadgeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.01 2.1C8.61 1.65 7.08 2.28 6.41 3.59L5.61 5.17C5.51 5.36 5.36 5.51 5.17 5.61L3.59 6.41C2.28 7.08 1.65 8.61 2.1 10.01L2.65 11.69C2.71 11.89 2.71 12.11 2.65 12.31L2.1 13.99C1.65 15.39 2.28 16.92 3.59 17.59L5.17 18.39C5.36 18.49 5.51 18.64 5.61 18.83L6.41 20.41C7.08 21.72 8.61 22.35 10.01 21.9L11.69 21.35C11.89 21.29 12.11 21.29 12.31 21.35L13.99 21.9C15.39 22.35 16.92 21.72 17.59 20.41L18.39 18.83C18.49 18.64 18.64 18.49 18.83 18.39L20.41 17.59C21.72 16.92 22.35 15.39 21.9 13.99L21.35 12.31C21.29 12.11 21.29 11.89 21.35 11.69L21.9 10.01C22.35 8.61 21.72 7.08 20.41 6.41L18.83 5.61C18.64 5.51 18.49 5.36 18.39 5.17L17.59 3.59C16.92 2.28 15.39 1.65 13.99 2.1L12.31 2.65C12.11 2.71 11.89 2.71 11.69 2.65L10.01 2.1ZM6.76 11.76L8.17 10.34L11 13.17L16.66 7.51L18.07 8.93L11 16L6.76 11.76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiVerifiedBadgeFill;
