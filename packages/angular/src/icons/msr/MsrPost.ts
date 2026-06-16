import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-post",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPost {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M780-120H180q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h600q24.75 0 42.38 17.63T840-780v600q0 24.75-17.62 42.38T780-120Zm-20-143H200v78h560v-78Zm-560-41h560v-78H200v78Zm0-129h560v-327H200v327Zm0 170v78-78Zm0-41v-78 78Zm0-129v-327 327Zm0 51v-51 51Zm0 119v-41 41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPost;
