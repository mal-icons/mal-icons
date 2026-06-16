import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-fit-screen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFitScreen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M820-610v-130H690v-60h130q24 0 42 18t18 42v130h-60Zm-740 0v-130q0-24 18-42t42-18h130v60H140v130H80Zm610 450v-60h130v-130h60v130q0 24-18 42t-42 18H690Zm-550 0q-24 0-42-18t-18-42v-130h60v130h130v60H140Zm60-120v-400h560v400H200Zm60-60h440v-280H260v280Zm0 0v-280 280Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFitScreen;
