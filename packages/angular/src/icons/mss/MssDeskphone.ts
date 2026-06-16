import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-deskphone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDeskphone {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M660-180h120v-600H660v600ZM250-410h60v-60h-60v60Zm0 120h60v-60h-60v60Zm0-240h300v-140H250v140Zm120 120h60v-60h-60v60Zm0 120h60v-60h-60v60Zm120-120h60v-60h-60v60Zm0 120h60v-60h-60v60Zm110 70v-520H180v520h420Zm-480 60v-640h480v-40h240v720H600v-40H120Zm60-60v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDeskphone;
