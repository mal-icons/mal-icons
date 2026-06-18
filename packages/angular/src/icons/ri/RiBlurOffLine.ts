import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-blur-off-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBlurOffLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.15 19.56C14.63 22.87 9.08 22.81 5.64 19.36C2.19 15.92 2.12 10.37 5.43 6.84L1.39 2.8L2.81 1.39L22.61 21.19L21.19 22.6L18.15 19.56ZM6.85 8.26C4.32 11 4.39 15.28 7.05 17.95C9.71 20.61 13.99 20.68 16.74 18.15L6.85 8.26ZM20.41 16.2L18.82 14.6C19.35 12.32 18.73 9.82 16.95 8.05L12 3.1L9.66 5.44L8.24 4.03L12 0.27L18.36 6.63C20.95 9.22 21.63 12.99 20.41 16.2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBlurOffLine;
