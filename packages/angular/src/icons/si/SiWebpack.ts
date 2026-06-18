import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-webpack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWebpack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.2 18.5l-9.77 5.5v-4.29l6.09-3.33 3.68 2.12zm0.67-0.6V6.39l-3.58 2.05v7.4zm-21.070.6l9.77 5.5v-4.29L5.48 16.38l-3.68 2.12zm-0.67-0.6V6.39l3.58 2.05v7.4zm0.42-12.25l10.02-5.64v4.14L5.15 7.66l-0.050.03zm20.9 0l-10.02-5.64v4.14l6.42 3.520.050.03 3.55-2.04zm-10.88 13.1l-6.01-3.29V8.94l6.01 3.45v6.35zm0.86 0l6.01-3.29V8.94l-6.01 3.45zM5.97 8.18l6.03-3.3L18.03 8.18l-6.03 3.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWebpack;
