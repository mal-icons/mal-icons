import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-camera-rear",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCameraRear {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.85 18.85a0.50.5 0 0 0-0.850.36V20H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h4v0.79c0 0.450.540.670.850.35l1.79-1.79c0.2-0.20.2-0.51 0-0.71l-1.79-1.79zM18 20h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1h3c0.55 0 1-0.45 1-1s-0.45-1-1-1zM17 0H7C5.9 0 5 0.9 5 2v14c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V2c0-1.1-0.9-2-2-2zm-5 6c-1.11 0-2-0.9-2-2s0.89-2 1.99-2 2 0.9 2 2C14 5.1 13.1 6 12 6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCameraRear;
