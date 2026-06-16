import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-currency-ruble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCurrencyRuble {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M290-120v-130h-90v-60h90v-110h-90v-60h90v-360h260q87.82 0 148.91 61.13Q760-717.74 760-629.87T698.91-481Q637.82-420 550-420H350v110h170v60H350v130h-60Zm60-360h200q63 0 106.5-43.5T700-630q0-63-43.5-106.5T550-780H350v300Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCurrencyRuble;
