import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-audioboom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAudioboom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 24C5.37 24 0 18.63 0 12S5.37 0 12 0s12 5.37 12 12-5.37 12-12 12zM7.43 3.21c-0.62 0-1.120.5-1.12 1.12v6a1.12 1.12 0 0 0 2.25 0v-6c0-0.62-0.5-1.12-1.12-1.12zm0 9.31c-0.62 0-1.120.5-1.12 1.13v6a1.12 1.12 0 0 0 2.25 0v-6c0-0.62-0.5-1.12-1.12-1.12zm4.15-6.86c-0.62 0-1.120.5-1.12 1.13v10.39a1.12 1.12 0 0 0 2.25 0V6.8c0-0.62-0.5-1.12-1.12-1.12zm4.15 6.86c-0.62 0-1.120.5-1.12 1.13v1.06a1.12 1.12 0 1 0 2.25 0v-1.06c0-0.62-0.5-1.12-1.12-1.12zm0-4.37c-0.62 0-1.120.5-1.12 1.12v1.06a1.12 1.12 0 0 0 2.25 0V9.28c0-0.62-0.5-1.12-1.12-1.12zm4.15 2.42c-0.62 0-1.120.5-1.12 1.12v0.57a1.12 1.12 0 1 0 2.25 0v-0.57c0-0.62-0.5-1.12-1.12-1.12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAudioboom;
