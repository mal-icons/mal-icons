import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-arrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfArrow {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.6 11.35l-0.71-0.71 1.64-1.64h-5.54v5.54l1.64-1.64 0.71 0.71-2.85 2.86-2.85-2.85 0.71-0.71 1.64 1.64v-5.54h-5.54l1.64 1.64-0.71 0.71-2.85-2.85 2.86-2.85 0.71 0.71-1.64 1.64h5.54v-5.54l-1.64 1.64-0.71-0.71 2.85-2.85 2.85 2.86-0.71 0.71-1.64-1.64v5.54h5.54l-1.64-1.64 0.71-0.71 2.86 2.85-2.85 2.85z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfArrow;
