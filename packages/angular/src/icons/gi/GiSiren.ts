import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-siren",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSiren {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M157.71 400.36h193.09v17.53h-193.09v-17.53zm180.8-17.53h-165v-96.82a53.29 53.29 0 0 1 53.29-53.29h58.43a53.29 53.29 0 0 1 53.28 53.29v96.79zm-106.64-135.77h-10.44a37.83 37.83 0 0 0-37.83 37.83v77.22h48.27v-115zm-197 79.59h103.58v-17.53H34.88v17.53zm137.41-107.9l-73.22-73.23-12.4 12.4 73.23 73.23zm92.5-124.63h-17.54v103.57h17.53V94.12zm149 51.39l-73.23 73.23 12.4 12.4 73.23-73.23zm-40.18 163.6v17.53h103.54v-17.52h-103.57z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSiren;
