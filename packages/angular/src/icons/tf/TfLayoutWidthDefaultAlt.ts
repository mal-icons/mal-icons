import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-width-default-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutWidthDefaultAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 16h1v1h-1v-1zM10 17h1v-1h-1v1zM12 17h1v-1h-1v1zM4 17h1v-1h-1v1zM6 17h1v-1h-1v1zM8 17h1v-1h-1v1zM14 17h1v-1h-1v1zM14 3h1v-1h-1v1zM14 5h1v-1h-1v1zM14 13h1v-1h-1v1zM14 7h1v-1h-1v1zM14 9h1v-1h-1v1zM14 15h1v-1h-1v1zM14 11h1v-1h-1v1zM14 0v1h1v-1h-1zM12 1h1v-1h-1v1zM6 1h1v-1h-1v1zM8 1h1v-1h-1v1zM10 1h1v-1h-1v1zM4 1h1v-1h-1v1zM2 1h1v-1h-1v1zM2 13h1v-1h-1v1zM2 15h1v-1h-1v1zM2 11h1v-1h-1v1zM2 3h1v-1h-1v1zM2 5h1v-1h-1v1zM2 7h1v-1h-1v1zM2 9h1v-1h-1v1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutWidthDefaultAlt;
