import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-local-cafe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLocalCafe {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M190-120q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T190-180h579q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T769-120H190Zm121-120q-63 0-107-43.5T160-390v-390q0-24.75 17.63-42.37T220-840h600q24.75 0 42.38 17.63T880-780v160q0 24.75-17.62 42.38T820-560h-96v170q0 63-44 106.5T573-240H311Zm0-60h261.98Q609-300 636.5-327.5T664-390v-390H220v390q0 35 28 62.5t63 27.5Zm413-320h96v-160h-96v160Zm-282 80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLocalCafe;
