import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-church",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssChurch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-80v-309l165-73v-131l205-105v-82h-80v-60h80v-80h60v80h80v60h-80v82l205 105v131l165 73v309H530v-210H430v210H80Zm60-60h230v-214h220v214h230v-214l-165-73v-133l-175-91-175 91v133l-165 73v214Zm340.06-285Q503-425 519-441.06q16-16.06 16-39T518.94-519q-16.06-16-39-16T441-518.94q-16 16.06-16 39T441.06-441q16.06 16 39 16ZM480-396Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssChurch;
