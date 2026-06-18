import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-baserow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBaserow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.290.07A1.29 1.29 0 0 0 0 1.36v3.35a1.29 1.29 0 0 0 1.29 1.29h3.35a1.29 1.29 0 0 0 1.29-1.29V1.36A1.29 1.29 0 0 0 4.640.07Zm9.03 0a1.29 1.29 0 0 0-1.29 1.29v3.35a1.29 1.29 0 0 0 1.29 1.29H22.71A1.29 1.29 0 0 0 24 4.71V1.36A1.29 1.29 0 0 0 22.710.07ZM1.29 9.03A1.29 1.29 0 0 0 0 10.32v3.35a1.29 1.29 0 0 0 1.29 1.29h21.42A1.29 1.29 0 0 0 24 13.68v-3.35a1.29 1.29 0 0 0-1.29-1.29Zm0 8.97A1.29 1.29 0 0 0 0 19.29v3.35a1.29 1.29 0 0 0 1.29 1.29h12.39a1.29 1.29 0 0 0 1.29-1.29v-3.35a1.29 1.29 0 0 0-1.29-1.29zm18.06 0a1.29 1.29 0 0 0-1.29 1.29v3.35a1.29 1.29 0 0 0 1.29 1.29h3.35A1.29 1.29 0 0 0 24 22.64v-3.35a1.29 1.29 0 0 0-1.29-1.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBaserow;
