import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-trello",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfTrello {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.5 15.83c0 0.37-0.3 0.67-0.67 0.67h-14.67c-0.36 0-0.67-0.3-0.67-0.67v-14.67c0-0.36 0.3-0.67 0.67-0.67h14.67c0.36 0 0.67 0.3 0.67 0.67v14.67zM7.83 2.5c0-0.19-0.15-0.33-0.33-0.33h-5c-0.19 0-0.33 0.15-0.33 0.33v10.67c0 0.19 0.15 0.33 0.33 0.33h5c0.19 0 0.33-0.15 0.33-0.33v-10.67zM14.83 2.5c0-0.19-0.15-0.33-0.33-0.33h-5c-0.19 0-0.33 0.15-0.33 0.33v6.67c0 0.19 0.14 0.33 0.33 0.33h5c0.19 0 0.33-0.15 0.33-0.33v-6.67z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfTrello;
