import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-blur-circular",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBlurCircular {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 9c-0.55 0-1 0.45-1 1s0.45 1 1 1 1-0.45 1-1-0.45-1-1-1zm0 4c-0.55 0-1 0.45-1 1s0.45 1 1 1 1-0.45 1-1-0.45-1-1-1zM7 9.5c-0.28 0-0.50.22-0.50.5s0.220.50.50.50.5-0.220.5-0.5-0.22-0.5-0.5-0.5zm3 7c-0.28 0-0.50.22-0.50.5s0.220.50.50.50.5-0.220.5-0.5-0.22-0.5-0.5-0.5zm-3-3c-0.28 0-0.50.22-0.50.5s0.220.50.50.50.5-0.220.5-0.5-0.22-0.5-0.5-0.5zm3-6c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5-0.50.22-0.50.50.220.50.50.5zM14 9c-0.55 0-1 0.45-1 1s0.45 1 1 1 1-0.45 1-1-0.45-1-1-1zm0-1.5c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5-0.50.22-0.50.50.220.50.50.5zm3 6c-0.28 0-0.50.22-0.50.5s0.220.50.50.50.5-0.220.5-0.5-0.22-0.5-0.5-0.5zm0-4c-0.28 0-0.50.22-0.50.5s0.220.50.50.50.5-0.220.5-0.5-0.22-0.5-0.5-0.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-0.28 0-0.50.22-0.50.5s0.220.50.50.50.5-0.220.5-0.5-0.22-0.5-0.5-0.5zm0-3.5c-0.55 0-1 0.45-1 1s0.45 1 1 1 1-0.45 1-1-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBlurCircular;
