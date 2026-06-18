import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-streamlit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiStreamlit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.67 11.32l6.86-3.62c0.23-0.140.550.120.440.39L20.46 17.1zm-8.56-0.23l3.47-5.19c0.2-0.330.58-0.320.79-0.03l7.89 11.75zm-3.37 7.25c-0.28 0-0.83-0.28-0.99-0.72l-3.72-9.46c-0.12-0.330.14-0.610.48-0.46l19.47 10.31c-0.150.15-0.450.34-0.720.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiStreamlit;
