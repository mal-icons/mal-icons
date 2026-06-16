import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-push-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPushPin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M19 12.87c0-0.47-0.34-0.85-0.8-0.98A3 3 0 0 1 16 9V4h1c0.55 0 1-0.45 1-1s-0.45-1-1-1H7c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v5c0 1.38-0.93 2.54-2.2 2.89-0.460.13-0.80.51-0.80.98V13c0 0.550.45 1 1 1h4.98l0.02 7c0 0.550.45 1 1 1s1-0.45 1-1l-0.02-7H18c0.55 0 1-0.45 1-1v-0.13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPushPin;
