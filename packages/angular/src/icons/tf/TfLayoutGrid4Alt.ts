import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-grid4-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutGrid4Alt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 1h3v3h-3v-3zM5 4h3v-3h-3v3zM9 4h3v-3h-3v3zM13 1v3h3v-3h-3zM1 8h3v-3h-3v3zM5 8h3v-3h-3v3zM9 8h3v-3h-3v3zM13 8h3v-3h-3v3zM1 12h3v-3h-3v3zM5 12h3v-3h-3v3zM9 12h3v-3h-3v3zM13 12h3v-3h-3v3zM1 16h3v-3h-3v3zM5 16h3v-3h-3v3zM9 16h3v-3h-3v3zM13 16h3v-3h-3v3z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutGrid4Alt;
