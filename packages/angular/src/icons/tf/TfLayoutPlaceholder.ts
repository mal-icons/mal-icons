import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-placeholder",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutPlaceholder {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.02 1.01v15h17v-15h-17zM8.14 8.51l-7.12 6.2v-12.41l7.12 6.22zM1.46 2.01h14.14l-7.08 6.17-7.06-6.16zM8.52 8.84l7.07 6.17h-14.15l7.09-6.17zM8.9 8.51l7.12-6.2v12.43l-7.12-6.22z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutPlaceholder;
