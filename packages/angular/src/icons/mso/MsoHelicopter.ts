import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-helicopter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHelicopter {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M370-430v-270h-10q-109 0-184.5 75.83Q100-548.33 100-440v10h270Zm170 170v-440H430v330H100v110h440Zm60-126 260-28v-86H600v114ZM520-80H120v-60h400v60Zm80-120H100q-24.75 0-42.37-17.62T40-260v-180q0-134 93-227t227-93h240v200h200l40-80h80v280l-320 34v126Zm160-620H120v-60h640v60ZM600-386v-114 114Zm-60 126Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHelicopter;
