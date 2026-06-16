import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-emoticon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoEmoticon {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M250-280q-21 0-35.5-14.5T200-330q0-20 14.5-35t35.5-15q20 0 35 15t15 35q0 21-15 35.5T250-280Zm0-300q-21 0-35.5-14.5T200-630q0-20 14.5-35t35.5-15q20 0 35 15t15 35q0 21-15 35.5T250-580Zm150 130v-60h160v60H400Zm289 205-49-33q29-45 44.5-95.5T700-480q0-67-22-127t-63-108l46-38q46 56 72.5 125.5T760-480q0 66-19 125t-52 110Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoEmoticon;
