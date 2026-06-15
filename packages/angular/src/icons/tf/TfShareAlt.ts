import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-share-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfShareAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.53 8.23l-3.85-3.85 3.85-3.85 0.71 0.71-2.65 2.65h2.91c3.03 0 5.5 2.47 5.5 5.5 0 1.52-0.64 2.98-1.75 4.02l-0.68-0.73c0.92-0.86 1.43-2.03 1.43-3.29 0-2.48-2.02-4.5-4.5-4.5h-2.91l2.65 2.65-0.71 0.71zM16 9.03v6.48c0 0.28-0.22 0.5-0.5 0.5h-14c-0.28 0-0.5-0.22-0.5-0.5v-6.47h-1v6.47c0 0.83 0.67 1.5 1.5 1.5h14c0.83 0 1.5-0.67 1.5-1.5v-6.47h-1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfShareAlt;
