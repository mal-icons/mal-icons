import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-film",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlFilm {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M800 272.29h64c17.66 0 32-14.34 32-32v-32c0-17.66-14.34-32-32-32h-64c-17.66 0-32 14.34-32 32v32c0 17.66 14.34 32 32 32zm0 192h64c17.66 0 32-14.34 32-32v-32c0-17.66-14.34-32-32-32h-64c-17.66 0-32 14.34-32 32v32c0 17.66 14.34 32 32 32zm0 192h64c17.66 0 32-14.34 32-32v-32c0-17.66-14.34-32-32-32h-64c-17.66 0-32 14.34-32 32v32c0 17.66 14.34 32 32 32zm0 192h64c17.66 0 32-14.34 32-32v-32c0-17.66-14.34-32-32-32h-64c-17.66 0-32 14.34-32 32v32c0 17.66 14.34 32 32 32zm-640-576h64c17.66 0 32-14.34 32-32v-32c0-17.66-14.34-32-32-32h-64c-17.66 0-32 14.34-32 32v32c0 17.66 14.34 32 32 32zm0 192h64c17.66 0 32-14.34 32-32v-32c0-17.66-14.34-32-32-32h-64c-17.66 0-32 14.34-32 32v32c0 17.66 14.34 32 32 32zm0 192h64c17.66 0 32-14.34 32-32v-32c0-17.66-14.34-32-32-32h-64c-17.66 0-32 14.34-32 32v32c0 17.66 14.34 32 32 32zm0 192h64c17.66 0 32-14.34 32-32v-32c0-17.66-14.34-32-32-32h-64c-17.66 0-32 14.34-32 32v32c0 17.66 14.34 32 32 32zM960 15.9H64c-35.18 0-64 28.82-64 64v864.19c0 35.18 28.82 64 64 64h896c35.18 0 64-28.82 64-64V79.9c0-35.18-28.82-64-64-64zm0 928.19H64V79.91h896v864.19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlFilm;
