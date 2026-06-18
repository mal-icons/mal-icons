import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-error-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxErrorCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.95 2C6.47 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.49 2 11.95 2zM12 20c-4.41 0-8-3.59-8-8s3.57-8 7.95-8C16.39 4 20 7.59 20 12s-3.59 8-8 8z"}],["path",{"d":"M11 7h2v7h-2zm0 8h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxErrorCircle;
