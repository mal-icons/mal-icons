import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-filter-frames",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFilterFrames {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-80q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h180l139-139q9-9 21-9t21 9l139 139h180q24 0 42 18t18 42v600q0 24-18 42t-42 18H140Zm0-60h680v-600H140v600Zm100-130v-340q0-12.75 8.63-21.37T270-640h420q12.75 0 21.38 8.63T720-610v340q0 12.75-8.62 21.38T690-240H270q-12.75 0-21.37-8.62T240-270Zm60-30h360v-280H300v280Zm180-139Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFilterFrames;
