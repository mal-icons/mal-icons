import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-width-default",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutWidthDefault {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v17h17v-17h-17zM16 16h-15v-15h15v15zM3 8h1v1h-1v-1zM3 4h1v1h-1v-1zM3 10h1v1h-1v-1zM3 6h1v1h-1v-1zM3 2h1v1h-1v-1zM3 14h1v1h-1v-1zM3 12h1v1h-1v-1zM13 2h1v1h-1v-1zM13 6h1v1h-1v-1zM13 4h1v1h-1v-1zM13 8h1v1h-1v-1zM13 10h1v1h-1v-1zM13 12h1v1h-1v-1zM13 14h1v1h-1v-1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutWidthDefault;
