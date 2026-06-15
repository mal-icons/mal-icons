import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-desktop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfDesktop {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 11h13v-8h-13v8zM3 4h11v6h-11v-6zM15.5 1h-14c-0.83 0-1.5 0.64-1.5 1.42v10.15c0 0.79 0.67 1.42 1.5 1.42h14c0.83 0 1.5-0.64 1.5-1.42v-10.15c0-0.78-0.67-1.42-1.5-1.42zM16 12.58c0 0.23-0.22 0.42-0.5 0.42h-14c-0.28 0-0.5-0.19-0.5-0.42v-10.15c0-0.23 0.23-0.42 0.5-0.42h14c0.28 0 0.5 0.19 0.5 0.42v10.15zM5 15h7v1h-7v-1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfDesktop;
