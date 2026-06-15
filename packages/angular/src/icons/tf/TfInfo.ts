import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-info",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfInfo {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.8 14.28v1h-4.6v-1h1.8v-7.43h-1.75v-1h2.75v8.43h1.8zM7.99 4.05c0.85 0 1.53-0.69 1.53-1.53 0-0.85-0.68-1.53-1.53-1.53-0.85 0-1.53 0.69-1.53 1.53 0 0.85 0.69 1.53 1.53 1.53z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfInfo;
