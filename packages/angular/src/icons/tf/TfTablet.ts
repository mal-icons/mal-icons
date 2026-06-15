import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-tablet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfTablet {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.25 14.5c0 0.42-0.33 0.75-0.75 0.75s-0.75-0.33-0.75-0.75 0.34-0.75 0.75-0.75 0.75 0.34 0.75 0.75zM16 1.5v14c0 0.83-0.62 1.5-1.39 1.5h-12.22c-0.77 0-1.39-0.67-1.39-1.5v-14c0-0.83 0.63-1.5 1.39-1.5h12.22c0.77 0 1.39 0.67 1.39 1.5zM15 1.5c0-0.27-0.18-0.5-0.39-0.5h-12.22c-0.21 0-0.39 0.23-0.39 0.5v14c0 0.27 0.18 0.5 0.39 0.5h12.22c0.21 0 0.39-0.23 0.39-0.5v-14zM3 2h11v11h-11v-11zM4 12h9v-9h-9v9z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfTablet;
