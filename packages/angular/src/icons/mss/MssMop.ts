import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-mop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMop {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M420-520h120v-280q0-25-17.25-42.5T480-860q-25.5 0-42.75 17.25T420-800v280ZM180-340h600v-120H180v120Zm-64 240h134v-120h60v120h140v-120h60v120h140v-120h60v120h134l-50-200H166l-50 200ZM40-40l80-320v-160h240v-280q0-50 35-85t85-35q50 0 85 35t35 85v280h240v160l80 320H40Zm740-420H180h600Zm-240-60H420h120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMop;
