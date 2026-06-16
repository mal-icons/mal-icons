import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-fort",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFort {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-120v-156l80-80v-258l-80-80v-146h60v80h100v-80h60v80h100v-80h60v146l-80 80v74h280v-74l-80-80v-146h60v80h100v-80h60v80h100v-80h60v146l-80 80v258l80 80v156H570v-210H390v210H40Zm60-60h230v-210h300v210h230v-71l-80-80v-308l61-61H619l61 61v159H280v-159l61-61H119l61 61v308l-80 80v71Zm380-260Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFort;
