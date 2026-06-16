import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-send-and-archive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSendAndArchive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.15 5.85-1.79 1.79c-0.20.2-0.510.2-0.71 0l-1.79-1.79c-0.32-0.31-0.1-0.850.35-0.85h1.29v-2.5c0-0.280.22-0.50.5-0.5s0.50.220.50.5V17h1.29a0.50.5 0 0 1 0.360.85z"}],["path",{"d":"M17 10c0.1 0 0.190.010.280.01L3 4v6l8 2-8 2v6l7-2.95V17c0-3.87 3.13-7 7-7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSendAndArchive;
