import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-uniqlo-ja",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiUniqloJa {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0.01v23.98h24V0.01ZM4.29 3.29h4.55l0.01 5.8h1.51v1.51h-6.82V9.09h3.78v-4.29H4.29zm10.11 0h5.3v1.51H14.4zm-0.76 5.81h6.82v1.51H13.64zM4.29 13.39l6.070-1.51 7.32H2.78l0.31-1.52h4.55l0.89-4.29H5.49l-0.46 2.15H3.52Zm9.35 0h6.82v7.32H13.64zm1.52 1.52v4.29h3.79v-4.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiUniqloJa;
