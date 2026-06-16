import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-view-array",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrViewArray {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M329-260v-440 440Zm422 60q-12.75 0-21.37-8.62T721-230v-500q0-12.75 8.63-21.37T751-760h59q12.75 0 21.38 8.63T840-730v500q0 12.75-8.62 21.38T810-200h-59Zm-452 0q-12.75 0-21.37-8.62T269-230v-500q0-12.75 8.63-21.37T299-760h362q12.75 0 21.38 8.63T691-730v500q0 12.75-8.62 21.38T661-200H299Zm-149 0q-12.75 0-21.37-8.62T120-230v-500q0-12.75 8.63-21.37T150-760h59q12.75 0 21.38 8.63T239-730v500q0 12.75-8.62 21.38T209-200h-59Zm179-500v440h302v-440H329Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrViewArray;
