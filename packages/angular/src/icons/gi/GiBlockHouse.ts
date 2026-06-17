import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-block-house",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBlockHouse {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M375 32v41H100.33l-49.6 62h410.55l-49.6-62H393V32h-18zM85.73 153L96 163.27 106.27 153H85.73zm64 0L160 163.27 170.27 153h-20.55zm64 0L224 163.27 234.27 153h-20.55zm64 0l11.19 11.19L300.65 153h-22.92zm64 0L352 163.27 362.27 153h-20.55zm64 0L416 163.27 426.27 153h-20.55zM128 156.73L108.73 176 128 195.27 147.27 176 128 156.73zm64 0L172.73 176 192 195.27 211.27 176 192 156.73zm64 0L236.73 176l19.42 19.42 19.74-18.81L256 156.73zm128 0L364.73 176 384 195.27 403.27 176 384 156.73zm-62.62 1.38l-19.73 18.81L320 195.27 339.27 176l-17.9-17.9zM73 165.73v20.55L83.27 176 73 165.73zm366 0L428.73 176 439 186.27v-20.55zm-343 23L85.73 199h20.55L96 188.73zm64 0L149.73 199h20.55L160 188.73zm64 0L213.73 199h20.55L224 188.73zm128 0L341.73 199h20.55L352 188.73zm64 0L405.73 199h20.55L416 188.73zm-127.390.61l-10.13 9.66h19.79l-9.66-9.66zM73 217v126h366V217H73zm23 39h80v32H96v-32zm112 0h96v32h-96v-32zm128 0h80v32h-80v-32zM75.5 361l43.5 58v-30l-21-28H75.5zm61.5 0v126h23v-71h48v71h167V361H137zm277 0l-21 28v30l43.5-58H414zm-174 55h32v32h-32v-32zm64 0h32v32h-32v-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBlockHouse;
