import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-currency-bitcoin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCurrencyBitcoin {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M370-120v-90H240v-60h90v-420h-90v-60h130v-90h60v90h110v-90h60v93q54 11 87 53t33 94q0 28-11 55.5T677-495q39 20 61 56.5t22 78.5q0 62-43.5 106T610-210h-10v90h-60v-90H430v90h-60Zm20-390h180q38 0 64-26.5t26-63.5q0-38-26-64t-64-26H390v180Zm0 240h220q38 0 64-26.5t26-63.5q0-38-26-64t-64-26H390v180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCurrencyBitcoin;
