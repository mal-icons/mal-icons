import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-wifi-calling",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssWifiCalling {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M673-556 464-766q45-35 98.5-54.5T673-840q58 0 111.5 19t98.5 55L673-556Zm0-85Zm122 521q-122 0-242.5-59.5T336-335q-96-96-156-217t-60-243q0-11 1-23t3-22h212l40 189-117 118q56 93 125.5 162T542-254l117-121 181 40v212q-10 1-22 2t-23 1ZM229-588l81-82-23-110H180q0 39 12 85.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Zm75-416 114-114q-27-13-55.5-19t-58.5-6q-29 0-58 6.5T559-755l114 114Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssWifiCalling;
