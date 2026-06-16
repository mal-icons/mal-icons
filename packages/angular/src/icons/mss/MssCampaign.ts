import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-campaign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCampaign {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M730-450v-60h150v60H730Zm50 290-121-90 36-48 121 90-36 48Zm-82-503-36-48 118-89 36 48-118 89ZM210-200v-160H80v-240h240l200-120v480L320-360h-50v160h-60Zm90-280Zm260 134v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346Zm-420-74h196l124 74v-268l-124 74H140v120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCampaign;
