import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-call-log",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCallLog {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M500-820v-60h380v60H500Zm0 170v-60h380v60H500Zm0 170v-60h380v60H500ZM755-80q-122 0-242.5-60T296-296q-96-96-156-216.5T80-755v-45h216l40 189-117 118q56 93 125.5 162T502-214l117-121 181 40v215h-45ZM189-548l81-82-23-110H140q0 39 12 85.5T189-548Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM189-548Zm369 363Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCallLog;
